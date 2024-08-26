
import { test, expect } from "@playwright/experimental-ct-react";
import App263 from "../example/App263.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App263 />);
  await expect(component).toContainText("Learn React");
});
