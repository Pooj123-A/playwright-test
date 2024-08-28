
import { test, expect } from "@playwright/experimental-ct-react";
import App2866 from "./App2866.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2866 />);
  await expect(component).toContainText("Learn React");
});
