
import { test, expect } from "@playwright/experimental-ct-react";
import App1072 from "./App1072.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1072 />);
  await expect(component).toContainText("Learn React");
});
