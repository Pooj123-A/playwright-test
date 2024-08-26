
import { test, expect } from "@playwright/experimental-ct-react";
import App2716 from "../example/App2716.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2716 />);
  await expect(component).toContainText("Learn React");
});
