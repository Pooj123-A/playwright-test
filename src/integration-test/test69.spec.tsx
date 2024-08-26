
import { test, expect } from "@playwright/experimental-ct-react";
import App69 from "../example/App69.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App69 />);
  await expect(component).toContainText("Learn React");
});
