
import { test, expect } from "@playwright/experimental-ct-react";
import App2133 from "../example/App2133.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2133 />);
  await expect(component).toContainText("Learn React");
});
