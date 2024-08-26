
import { test, expect } from "@playwright/experimental-ct-react";
import App353 from "../example/App353.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App353 />);
  await expect(component).toContainText("Learn React");
});
