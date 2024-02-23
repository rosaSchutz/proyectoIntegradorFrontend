package com.grupo4.nos_fuimos.controller;

import com.grupo4.nos_fuimos.model.Producto;
import com.grupo4.nos_fuimos.service.ProductoService;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductoController {

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService){
        this.productoService = productoService;
    }

    @PostMapping("/productos/guardar")
    public Producto guardarProducto(@RequestBody Producto producto){
        return productoService.addProducto(producto);
    }

    @GetMapping(value = "/productos")
    public List<Producto> listarProductos(Model model){
        return productoService.getAllProducto();
    }

    @GetMapping ("/productos/{id}")
    public Producto obtenerProducto(@PathVariable String id){
        return productoService.getProductoById(id);
    }

    @PutMapping("/productos/actualizar")
    Producto actualizarProducto(@RequestBody Producto producto){
        return productoService.actualizarProducto(producto);
    }

    @DeleteMapping("/productos/{id}")
    public String eliminarProducto(@PathVariable String id){
        productoService.deleteProducto(id);
        return "Producto eliminado";
    }

}
