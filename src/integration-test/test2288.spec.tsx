
import { test, expect } from "@playwright/experimental-ct-react";
import App2288 from "../example/App2288.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2288 />);
  await expect(component).toContainText("Learn React");
});
