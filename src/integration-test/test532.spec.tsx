
import { test, expect } from "@playwright/experimental-ct-react";
import App532 from "../example/App532.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App532 />);
  await expect(component).toContainText("Learn React");
});
