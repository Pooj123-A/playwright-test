
import { test, expect } from "@playwright/experimental-ct-react";
import App777 from "./App777.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App777 />);
  await expect(component).toContainText("Learn React");
});
