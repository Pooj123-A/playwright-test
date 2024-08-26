
import { test, expect } from "@playwright/experimental-ct-react";
import App589 from "../example/App589.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App589 />);
  await expect(component).toContainText("Learn React");
});
