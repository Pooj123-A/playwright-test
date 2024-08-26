
import { test, expect } from "@playwright/experimental-ct-react";
import App2151 from "../example/App2151.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2151 />);
  await expect(component).toContainText("Learn React");
});
