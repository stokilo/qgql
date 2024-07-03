package com.sstec.qgql.model.entity.house;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "House")
public class House {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "house_id")
    private Long houseId;

    @Column(name = "number", nullable = false)
    private Integer number;

    @Column(name = "address", nullable = false, length = 255)
    private String address;

    @Column(name = "owner", nullable = false, length = 255)
    private String owner;

    @OneToMany(mappedBy = "house", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Room> rooms;

    // Constructors
    public House() {}

    public House(Integer number, String address, String owner) {
        this.number = number;
        this.address = address;
        this.owner = owner;
    }

    // Getters and Setters
    public Long getHouseId() {
        return houseId;
    }

    public void setHouseId(Long houseId) {
        this.houseId = houseId;
    }

    public Integer getNumber() {
        return number;
    }

    public void setNumber(Integer number) {
        this.number = number;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getOwner() {
        return owner;
    }

    public void setOwner(String owner) {
        this.owner = owner;
    }

    public List<Room> getRooms() {
        return rooms;
    }

    public void setRooms(List<Room> rooms) {
        this.rooms = rooms;
    }

    // Add utility methods to manage bidirectional relationship, if necessary
    public void addRoom(Room room) {
        rooms.add(room);
        room.setHouse(this);
    }

    public void removeRoom(Room room) {
        rooms.remove(room);
        room.setHouse(null);
    }
}
