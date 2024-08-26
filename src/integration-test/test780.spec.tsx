
import { test, expect } from "@playwright/experimental-ct-react";
import App780 from "../example/App780.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App780 />);
  await expect(component).toContainText("Learn React");
});
