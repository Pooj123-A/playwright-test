
import { test, expect } from "@playwright/experimental-ct-react";
import App487 from "../example/App487.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App487 />);
  await expect(component).toContainText("Learn React");
});
