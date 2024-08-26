
import { test, expect } from "@playwright/experimental-ct-react";
import App2074 from "../example/App2074.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2074 />);
  await expect(component).toContainText("Learn React");
});
