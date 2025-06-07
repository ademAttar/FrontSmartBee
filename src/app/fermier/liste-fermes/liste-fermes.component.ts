import { Component } from '@angular/core';

interface Ferme {
  id: number;
  nom: string;
  superficie: number;
  site: string;
  fermier: string;
}

@Component({
  selector: 'app-liste-fermes',
  standalone: false,
  templateUrl: './liste-fermes.component.html',
  styleUrl: './liste-fermes.component.css'
})
export class ListeFermesComponent {
  fermes: Ferme[] = [];

  ngOnInit(): void {
    // Simule des données - tu peux remplacer par un appel à un service
    this.fermes = [
      {
        id: 1,
        nom: "Ferme des Abeilles d'Or",
        superficie: 2.5,
        site: "Tunis - Zone Nord",
        fermier: "Jean Dupont"
      },
      {
        id: 2,
        nom: "Ruche du Sud",
        superficie: 3.2,
        site: "Gafsa - Zone Sud",
        fermier: "Fatma Ben Salah"
      },
      {
        id: 3,
        nom: "Les Miels du Centre",
        superficie: 1.8,
        site: "Kairouan - Zone Centrale",
        fermier: "Mohamed Ali"
      }
    ];
  }

}
