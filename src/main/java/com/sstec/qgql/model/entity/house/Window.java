package com.sstec.qgql.model.entity.house;

import jakarta.persistence.*;

@Entity
@Table(name = "\"Window\"")
public class Window {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "window_id")
    private Long windowId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "room_id", nullable = false)
    private Room room;

    @Column(name = "size", nullable = false, length = 50)
    private String size;

    @Column(name = "producent", nullable = false, length = 255)
    private String producent;

    // Constructors
    public Window() {}

    public Window(String size, String producent, Room room) {
        this.size = size;
        this.producent = producent;
        this.room = room;
    }

    // Getters and Setters
    public Long getWindowId() {
        return windowId;
    }

    public void setWindowId(Long windowId) {
        this.windowId = windowId;
    }

    public Room getRoom() {
        return room;
    }

    public void setRoom(Room room) {
        this.room = room;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getProducent() {
        return producent;
    }

    public void setProducent(String producent) {
        this.producent = producent;
    }
}
