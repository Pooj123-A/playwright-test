
import { test, expect } from "@playwright/experimental-ct-react";
import App493 from "../example/App493.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App493 />);
  await expect(component).toContainText("Learn React");
});
