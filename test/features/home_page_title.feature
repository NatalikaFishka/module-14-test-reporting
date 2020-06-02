@smoke
@so
Feature: Page Titles

  # Scenario: Page title
  #   Given I open "Home" page
  #   Then Page title of "Home" page to be "Тренинг-центр EPAM в Беларуси - программы обучения для студентов, а также тех, кто хочет начать карьеру в IT | training.by"
  #   When I wait "3" seconds

  @so
  Scenario Outline: Titles <PageName>
    Given I open "<PageName>" page "<Link>"
    Then Link of "<PageName>" page is "<Link>"

    Examples:
      | PageName  | Link                                        |
      | Home      | https://training.by/#!/Home?lang=ru         |
      | Trainings | https://training.by/#!/TrainingList?lang=ru |
      | About Us  | https://training.by/#!/About?lang=ru        |