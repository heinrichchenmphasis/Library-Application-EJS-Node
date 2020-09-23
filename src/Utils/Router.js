import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "../Cells/Navbar/Navbar.js";
import { BooksOverview } from "../Layout/Books/BooksOverview.js";
import { UsersOverview } from "../Layout/Users/UsersOverview.js";
import { CheckoutsOverview } from "../Layout/Checkouts/CheckoutsOverview.js";
import { BookPage } from "../Layout/Books/BookPage.js";
import { UserPage } from "../Layout/Users/UserPage.js";
import { CheckoutPage } from "../Layout/Checkouts/CheckoutPage.js";
import { EditBookForm } from "../Cells/Forms/EditBookForm.js";
import { EditUserForm } from "../Cells/Forms/EditUserForm.js";
import { EditCheckoutForm } from "../Cells/Forms/EditCheckoutForm.js";

export const Router = () => (
  <BrowserRouter>
    <Navbar />
    <div className="main-wrapper">
      <Switch>
        <Route exact path="/" component={BooksOverview} />

        <Route exact path="/books" component={BooksOverview} />
        <Route exact path="/users" component={UsersOverview} />
        <Route exact path="/checkouts" component={CheckoutsOverview} />

        <Route exact path="/books/:bookId" component={BookPage} />
        <Route exact path="/users/:userId" component={UserPage} />
        <Route exact path="/checkouts/:checkoutId" component={CheckoutPage} />

        <Route exact path="/editBook/:bookId" component={EditBookForm} />
        <Route exact path="/editUser/:userId" component={EditUserForm} />
        <Route
          exact
          path="/editCheckout/:checkoutId"
          component={EditCheckoutForm}
        />
      </Switch>
    </div>
  </BrowserRouter>
);
