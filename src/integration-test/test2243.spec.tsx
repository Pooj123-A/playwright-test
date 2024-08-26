
import { test, expect } from "@playwright/experimental-ct-react";
import App2243 from "../example/App2243.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2243 />);
  await expect(component).toContainText("Learn React");
});
