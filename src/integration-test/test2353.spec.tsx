
import { test, expect } from "@playwright/experimental-ct-react";
import App2353 from "../example/App2353.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2353 />);
  await expect(component).toContainText("Learn React");
});
