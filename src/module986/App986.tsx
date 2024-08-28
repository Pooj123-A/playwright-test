
import { test, expect } from "@playwright/experimental-ct-react";
import App986 from "./App986.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App986 />);
  await expect(component).toContainText("Learn React");
});
