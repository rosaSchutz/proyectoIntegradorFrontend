package com.grupo4.nos_fuimos.service;

import com.grupo4.nos_fuimos.model.Producto;
import com.grupo4.nos_fuimos.repository.ProductoRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;


@Service
public class ProductoService {

    private final ProductoRepository productoRepository;

    public ProductoService(ProductoRepository productoRepository){
        this.productoRepository = productoRepository;
    }

    public List<Producto> getAllProducto(){
        return productoRepository.findAll();
    }

    public Producto addProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public Producto getProductoById(String id){
        Optional<Producto> optionalProducto = productoRepository.findById(id);
        return optionalProducto.orElse(null);
    }

    public Producto actualizarProducto(Producto producto){
        return productoRepository.save(producto);
    }

    public void deleteProducto(String id){
        productoRepository.deleteById(id);
    }

}
