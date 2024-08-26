
import { test, expect } from "@playwright/experimental-ct-react";
import App730 from "../example/App730.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App730 />);
  await expect(component).toContainText("Learn React");
});
