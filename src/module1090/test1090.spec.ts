
import { test, expect } from "@playwright/experimental-ct-react";
import App1090 from "./App1090.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1090 />);
  await expect(component).toContainText("Learn React");
});
