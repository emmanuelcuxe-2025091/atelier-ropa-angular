import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  badge?: string;
  color: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  readonly categories = ['Todo', 'Ropa', 'Accesorios', 'Calzado'];
  readonly products: Product[] = [
    { id: 1, name: 'Camisa lino Aurora', category: 'Ropa', price: 68, image: 'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=800&q=85', badge: 'Más vendido', color: 'Marfil' },
    { id: 2, name: 'Bolso Litoral', category: 'Accesorios', price: 92, image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=85', color: 'Arena' },
    { id: 3, name: 'Vestido Brisa', category: 'Ropa', price: 115, image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=85', badge: 'Nuevo', color: 'Terracota' },
    { id: 4, name: 'Sandalia Sal', category: 'Calzado', price: 74, image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=85', color: 'Cuero' },
    { id: 5, name: 'Pantalón Tierra', category: 'Ropa', price: 89, image: 'https://images.unsplash.com/photo-1506629905607-d9f1f0f3f5aa?auto=format&fit=crop&w=800&q=85', color: 'Oliva' },
    { id: 6, name: 'Aros Alba', category: 'Accesorios', price: 42, image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=85', color: 'Dorado' },
    { id: 7, name: 'Top Calma', category: 'Ropa', price: 56, image: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=85', color: 'Crudo' },
    { id: 8, name: 'Zapatilla Nube', category: 'Calzado', price: 98, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=85', color: 'Tiza' }
  ];

  readonly activeCategory = signal('Todo');
  readonly cartOpen = signal(false);
  readonly cart = signal<Product[]>([]);
  readonly notice = signal('');
  readonly visibleProducts = computed(() => {
    const category = this.activeCategory();
    return category === 'Todo' ? this.products : this.products.filter((product) => product.category === category);
  });
  readonly cartTotal = computed(() => this.cart().reduce((total, product) => total + product.price, 0));

  setCategory(category: string): void {
    this.activeCategory.set(category);
  }

  addToCart(product: Product): void {
    this.cart.update((items) => [...items, product]);
    this.notice.set(`${product.name} añadido a tu bolsa`);
    window.setTimeout(() => this.notice.set(''), 2600);
  }

  removeFromCart(index: number): void {
    this.cart.update((items) => items.filter((_, itemIndex) => itemIndex !== index));
  }

  scrollToCollection(): void {
    document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' });
  }
}
