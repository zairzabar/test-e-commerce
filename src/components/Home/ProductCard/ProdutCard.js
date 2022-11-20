import './ProductCard.css'

export default function ProductCard() {
    return (
        <div className="card">
            <img src="https://www.reliancedigital.in/medias/Apple-iPhone-14-Pro-Max-Mobile-Phone-493177798-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMzk2N3xpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDAzLzk4OTA3MjgyNDczMjYuanBnfGM1ZDU5NmEyOTUzZmZkMWViODBhZDQzODdjM2E3ZmEzOWZmYzA3NzliNDNhNDgxZGE4NTk5YzY5NDIyZmExYWE" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">iPhone</h5>
                <p className="card-text">Created by Apple</p>
                <button href="#" className="btn btn-primary flex">
                    <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                Add to Cart
                </button>
            </div>
        </div>
    )
}