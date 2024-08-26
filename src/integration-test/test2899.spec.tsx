
import { test, expect } from "@playwright/experimental-ct-react";
import App2899 from "../example/App2899.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2899 />);
  await expect(component).toContainText("Learn React");
});
