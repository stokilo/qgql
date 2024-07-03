package com.sstec.qgql.model.entity.house;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "Room")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "room_id")
    private Long roomId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "house_id", nullable = false)
    private House house;

    @Column(name = "width", nullable = false)
    private Float width;

    @Column(name = "height", nullable = false)
    private Float height;

    @Column(name = "length", nullable = false)
    private Float length;

    @OneToMany(mappedBy = "room", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Window> windows;

    // Constructors
    public Room() {}

    public Room(Float width, Float height, Float length, House house) {
        this.width = width;
        this.height = height;
        this.length = length;
        this.house = house;
    }

    // Getters and Setters
    public Long getRoomId() {
        return roomId;
    }

    public void setRoomId(Long roomId) {
        this.roomId = roomId;
    }

    public House getHouse() {
        return house;
    }

    public void setHouse(House house) {
        this.house = house;
    }

    public Float getWidth() {
        return width;
    }

    public void setWidth(Float width) {
        this.width = width;
    }

    public Float getHeight() {
        return height;
    }

    public void setHeight(Float height) {
        this.height = height;
    }

    public Float getLength() {
        return length;
    }

    public void setLength(Float length) {
        this.length = length;
    }

    public List<Window> getWindows() {
        return windows;
    }

    public void setWindows(List<Window> windows) {
        this.windows = windows;
    }

    // Add utility methods to manage bidirectional relationship, if necessary
    public void addWindow(Window window) {
        windows.add(window);
        window.setRoom(this);
    }

    public void removeWindow(Window window) {
        windows.remove(window);
        window.setRoom(null);
    }
}
