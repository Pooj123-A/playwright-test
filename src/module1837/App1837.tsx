
import { test, expect } from "@playwright/experimental-ct-react";
import App1837 from "./App1837.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1837 />);
  await expect(component).toContainText("Learn React");
});
