
import { test, expect } from "@playwright/experimental-ct-react";
import App249 from "../example/App249.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App249 />);
  await expect(component).toContainText("Learn React");
});
