
import { test, expect } from "@playwright/experimental-ct-react";
import App335 from "../example/App335.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App335 />);
  await expect(component).toContainText("Learn React");
});
