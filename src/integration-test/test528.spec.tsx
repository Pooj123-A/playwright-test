
import { test, expect } from "@playwright/experimental-ct-react";
import App528 from "../example/App528.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App528 />);
  await expect(component).toContainText("Learn React");
});
