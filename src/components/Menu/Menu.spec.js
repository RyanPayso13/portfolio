import { mount } from "@vue/test-utils";
import Menu from "@/components/Menu/Menu.vue";

{
  /* <div>Home</div>
<div>About</div>
<div>Experience</div>
<div>Skills</div>
<div>Interests</div> */
}

describe("Menu", () => {
  let wrapper;
  let menu;
  let items;
  const spy = jest.fn();

  beforeEach(() => {
    wrapper = mount(Menu, {
      methods: {
        goTo: spy
      }
    });
    menu = wrapper.find("nav");
    items = wrapper.findAll("nav > div");
  });

  it("should exist", () => {
    expect(wrapper.isVueInstance()).toBe(true);
  });

  it("should render a menu", () => {
    expect(menu).toBeDefined();
  });

  it("should render menu items", () => {
    expect(items.length).toEqual(5);
    expect(items.at(0).text()).toBe("home");
    expect(items.at(1).text()).toBe("about");
    expect(items.at(2).text()).toBe("experience");
    expect(items.at(3).text()).toBe("skills");
    expect(items.at(4).text()).toBe("interests");
  });

  describe("Navigation", () => {
    let item;

    beforeEach(() => {
      item = items.at(1);
    });

    xit("should navigate to the page", () => {
      item.trigger("click");
      expect(spy).toHaveBeenCalled();
      expect(spy).toHaveBeenCalledWith(1);
    });

    it("should highlight the first item", () => {
      const item = items.at(0);
      expect(item.classes()).toContain("border-b");
    });

    xit("should highlight an item", () => {
      const item = items.at(1);
      item.trigger("click");
      expect(item.classes()).toContain("border-b");
    });
  });
});
