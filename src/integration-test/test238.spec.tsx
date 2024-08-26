
import { test, expect } from "@playwright/experimental-ct-react";
import App238 from "../example/App238.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App238 />);
  await expect(component).toContainText("Learn React");
});
