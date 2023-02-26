package com.sstec.qgql.api;

import com.sstec.qgql.App;
import com.sstec.qgql.model.*;
import com.sstec.qgql.service.GalaxyService;
import io.smallrye.graphql.api.Context;
import org.eclipse.microprofile.graphql.*;
import org.jboss.logging.Logger;

import javax.inject.Inject;
import java.util.List;


//@GraphQLApi
public class FilmResource {

    private static final Logger log = Logger.getLogger(App.class);

    @Inject
    GalaxyService service;

    @Query("allFilms")
    @Description("Get all Films from a galaxy far far away")
    public List<Film> getAllFilms() {
        return service.getAllFilms();
    }

    @Query
    @Description("Get a Films from a galaxy far far away")
    public Film getFilm(@Name("filmId") List<Integer> ids) {
        Film f = null;
        try {
            f = service.getFilm(ids.get(0));
        } catch (Exception e) {
            e.printStackTrace();
            throw new SomeBusinessException("failed to fetch");
        }
        return f;
    }

    public List<Hero> heroes(@Source Film film) {
        return service.getHeroesByFilm(film);
    }

    @Query
    public List<Ally> allies() {
        return service.getAllAllies();
    }

    @Query
    @Description("Get all characters from a galaxy far far away")
    public List<com.sstec.qgql.model.Character> characters() {
        return service.getAllCharacters();
    }

    @Query
    @Description("Search for heroes or films")
    public List<SearchResult> search(String query) {
        return service.search(query);
    }


    @Mutation
    public HeroCreationResult createHero(Hero hero) {
        service.addHero(hero);
        HeroCreationResult h = new HeroCreationResult();
        h.success = true;
        h.error = "test";

        return h;
    }

    @Mutation
    public Hero deleteHero(int id) {
        return service.deleteHero(id);
    }

    @Inject
    Context context;
    @Query
    public List<Hero> getHeroesWithSurname(
            Context context,
            @DefaultValue("Skywalker") String surname) {
        return service.getHeroesBySurname(surname);
    }


}
