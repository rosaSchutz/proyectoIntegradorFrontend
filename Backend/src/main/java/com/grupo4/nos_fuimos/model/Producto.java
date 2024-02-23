package com.grupo4.nos_fuimos.model;

import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.UniqueConstraint;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.data.mongodb.core.mapping.Document;
import java.time.LocalDate;
import java.util.List;

@Document(collection = "productos")
public class Producto {

    @Id
    private String id;
    @NotNull
    private String nombre;
    @NotNull
    private String destino;
    @NotNull
    private LocalDate salidaDate;
    @NotNull
    private LocalDate vueltaDate;
    @NotNull
    private Double precio;
    private List<String> urlImagenes;
    
    public Producto(String id, String nombre, String destino, LocalDate salidaDate, LocalDate vueltaDate, Double precio, List<String> urlImagenes) {
        this.id = id;
        this.nombre = nombre;
        this.destino = destino;
        this.salidaDate = salidaDate;
        this.vueltaDate = vueltaDate;
        this.precio = precio;
        this.urlImagenes = urlImagenes;
    }

    public Producto(){}

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDestino() {
        return destino;
    }

    public void setDestino(String destino) {
        this.destino = destino;
    }

    public LocalDate getSalidaDate() {
        return salidaDate;
    }

    public void setSalidaDate(LocalDate salidaDate) {
        this.salidaDate = salidaDate;
    }

    public LocalDate getVueltaDate() {
        return vueltaDate;
    }

    public void setVueltaDate(LocalDate vueltaDate) {
        this.vueltaDate = vueltaDate;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public List<String> getUrlImagenes() {
        return urlImagenes;
    }

    public void setUrlImagenes(List<String> urlImagenes) {
        this.urlImagenes = urlImagenes;
    }
}
