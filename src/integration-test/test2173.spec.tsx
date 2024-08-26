
import { test, expect } from "@playwright/experimental-ct-react";
import App2173 from "../example/App2173.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2173 />);
  await expect(component).toContainText("Learn React");
});
