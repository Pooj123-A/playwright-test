
import { test, expect } from "@playwright/experimental-ct-react";
import App2118 from "../example/App2118.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2118 />);
  await expect(component).toContainText("Learn React");
});
