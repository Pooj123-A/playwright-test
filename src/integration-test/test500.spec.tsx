
import { test, expect } from "@playwright/experimental-ct-react";
import App500 from "../example/App500.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App500 />);
  await expect(component).toContainText("Learn React");
});
