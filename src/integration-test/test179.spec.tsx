
import { test, expect } from "@playwright/experimental-ct-react";
import App179 from "../example/App179.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App179 />);
  await expect(component).toContainText("Learn React");
});
