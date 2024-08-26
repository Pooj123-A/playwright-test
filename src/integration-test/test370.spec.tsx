
import { test, expect } from "@playwright/experimental-ct-react";
import App370 from "../example/App370.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App370 />);
  await expect(component).toContainText("Learn React");
});
