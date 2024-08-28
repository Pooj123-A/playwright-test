
import { test, expect } from "@playwright/experimental-ct-react";
import App224 from "./App224.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App224 />);
  await expect(component).toContainText("Learn React");
});
