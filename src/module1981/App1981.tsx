
import { test, expect } from "@playwright/experimental-ct-react";
import App1981 from "./App1981.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1981 />);
  await expect(component).toContainText("Learn React");
});
