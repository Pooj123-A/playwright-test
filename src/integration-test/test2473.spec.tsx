
import { test, expect } from "@playwright/experimental-ct-react";
import App2473 from "../example/App2473.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2473 />);
  await expect(component).toContainText("Learn React");
});
