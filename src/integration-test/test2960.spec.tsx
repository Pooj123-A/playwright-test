
import { test, expect } from "@playwright/experimental-ct-react";
import App2960 from "../example/App2960.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2960 />);
  await expect(component).toContainText("Learn React");
});
