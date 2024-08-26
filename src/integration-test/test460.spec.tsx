
import { test, expect } from "@playwright/experimental-ct-react";
import App460 from "../example/App460.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App460 />);
  await expect(component).toContainText("Learn React");
});
