
import { test, expect } from "@playwright/experimental-ct-react";
import App621 from "./App621.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App621 />);
  await expect(component).toContainText("Learn React");
});
