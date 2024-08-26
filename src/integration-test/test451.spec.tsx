
import { test, expect } from "@playwright/experimental-ct-react";
import App451 from "../example/App451.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App451 />);
  await expect(component).toContainText("Learn React");
});
