
import { test, expect } from "@playwright/experimental-ct-react";
import App866 from "./App866.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App866 />);
  await expect(component).toContainText("Learn React");
});
