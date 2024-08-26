
import { test, expect } from "@playwright/experimental-ct-react";
import App2122 from "../example/App2122.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2122 />);
  await expect(component).toContainText("Learn React");
});
