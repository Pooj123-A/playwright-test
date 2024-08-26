
import { test, expect } from "@playwright/experimental-ct-react";
import App348 from "../example/App348.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App348 />);
  await expect(component).toContainText("Learn React");
});
